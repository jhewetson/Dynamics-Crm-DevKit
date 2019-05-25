@echo off
set /p VERSION=<version.txt
echo ************************************************************
echo Building solution: DEPLOY RELEASE MODE - version: %VERSION%
echo ************************************************************
set MsBuild=""
if exist "C:\Program Files (x86)\Microsoft Visual Studio\2017\Enterprise\MSBuild\15.0\Bin\MSBuild.exe" (
	set MsBuild="C:\Program Files (x86)\Microsoft Visual Studio\2017\Enterprise\MSBuild\15.0\Bin\MSBuild.exe"
)
if exist "C:\Program Files (x86)\Microsoft Visual Studio\2019\Enterprise\MSBuild\Current\Bin\MSBuild.exe" (
	set MsBuild="C:\Program Files (x86)\Microsoft Visual Studio\2019\Enterprise\MSBuild\Current\Bin\MSBuild.exe"
)
if %MsBuild%=="" (
	echo msbuild.exe not found !!!
) else (
	if exist  Published\%VERSION%\ (
		del Published\%VERSION%\*.* /f /q
	)

	call %MsBuild% /nologo /noautorsp /verbosity:minimal -p:Configuration=Release -target:Clean;Build PL.DynamicsCrm.DevKit.sln

	cd PL.DynamicsCrm.DevKit.Tools\Nuget
	call pack.bat
	cd ..\..
	cd PL.DynamicsCrm.DevKit.Analyzers\Nuget
	call pack.bat

	cd ..\..
	cd PL.DynamicsCrm.DevKit.Cli\Nuget
	call pack.bat

	cd ..\..
	copy PL.DynamicsCrm.DevKit\Release\PL.DynamicsCrm.DevKit.vsix Published\%VERSION%\PL.DynamicsCrm.DevKit.%VERSION%.vsix

    copy "C:\src\github\phuocle\Dynamics-Crm-DevKit\source\PL.DynamicsCrm.DevKit.Cli\Release\PL.DynamicsCrm.DevKit.Cli.exe" "C:\src\github\phuocle\Dynamics-Crm-DevKit\test\CDS-DEVKIT\packages\PL.DynamicsCrm.DevKit.Cli.1.5.0\tools\PL.DynamicsCrm.DevKit.Cli.exe" /y

)
exit