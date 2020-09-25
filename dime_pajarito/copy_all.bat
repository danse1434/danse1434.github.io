ECHO OFF
SET source_dir="C:\Users\ACER\Desktop\DS4A\"
SET target_dir="F:\Documentos\Personal\Curriculum & Resume\WEB\danse1434.github.io\dime_pajarito"

REM for /R %source_dir% %%f in (*.html *.png) do echo %%f

xcopy C:\Users\ACER\Desktop\DS4A\*.html %target_dir% /e
xcopy C:\Users\ACER\Desktop\DS4A\*.png %target_dir% /e
xcopy C:\Users\ACER\Desktop\DS4A\*.js %target_dir% /e
xcopy C:\Users\ACER\Desktop\DS4A\*.css %target_dir% /e

PAUSE
PAUSE