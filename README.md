# Bienvenido al repositorio de portafolio 

Este repositorio contiene el código fuente y los archivos necesarios para el proyecto de portafolio Web.
## El front fue tomado de 
https://github.com/rahulkarda/react-portfolio

## Instrucciones de instalación
Para obtener una copia local del proyecto, sigue estos pasos:

Abre tu terminal y navega a la carpeta en la que quieres almacenar el proyecto.

Ejecuta el siguiente comando para clonar el repositorio:
```bash
git clone https://github.com/JuanSPuentes/portafolio.git
```

Una vez que se complete el proceso de clonación, entra en la carpeta del proyecto con el siguiente comando:

```bash
cd portafolio
```

## Instala las dependencias necesarias para React con el siguiente comando:
```bash
npm install
```
## Instala las dependencias necesarias para Python
```bash
pip install -r requirements.txt
```
## Importante las varialbes de entorno 
Es necesario declara dos .env
1. .env de python debe ir en la carpeta de backend y contener lo siguiente 
- SECRET_KEY=[YOUR SECRET KEY]
- URI=[URI] esta puede no ser necesaria si no se necesita hacer los cambios en el settings.py

2. .env de react debe ir en la raiz del proyecto y declara lo siguiente
- REACT_APP_API_URL='http://127.0.0.1:8000' url de la api a consumir
- PORT=80

Ejecución del proyecto
Para ejecutar el proyecto, sigue estos pasos:
Asegúrate de que estás en la carpeta del proyecto.

Ejecuta el siguiente comando para iniciar el servidor del frontend:

```bash
npm start
```
Ejecuta el siguiente comando para iniciar el servidor del backend:
```bash
python manage.py runserver
```

Abre tu navegador web y navega a la dirección http://localhost:3000  y  http://localhost:8000 para ver el proyecto en funcionamiento.

# Contribuyendo al proyecto
Si deseas contribuir al proyecto, sigue estos pasos:

Haz un fork del repositorio.

Crea una rama para tu contribución.

Haz tus cambios y commit con un mensaje de commit claro y conciso.

Haz un pull request a la rama principal del repositorio.

