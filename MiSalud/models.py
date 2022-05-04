from django.db import models

#-----------------------------------------------------------------------------------------------------------------------------------------------------

class Institucion(models.Model):
    nombre = models.CharField(max_length=45); #ATRIBUTO DE TIPO CharVar() (STRING)
    imagen = models.ImageField(upload_to="Fotos_Institucion", null=True); #ATRIBUTO TIPO (IMAGEN)

    def __str__(self):
        return "id = ("+str(self.id) +")"+"  Nombre = " + self.nombre;

#-----------------------------------------------------------------------------------------------------------------------------------------------------
class Tipo(models.Model):
    nombre = models.CharField(max_length=45); #ATRIBUTO DE TIPO CharVar() (STRING)

class Persona(models.Model):
    tipo = models.ForeignKey(Tipo, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=45); #ATRIBUTO DE TIPO CharVar() (STRING)
    apellido = models.CharField(max_length=45); #ATRIBUTO DE TIPO CharVar() (STRING)
    correo = models.EmailField(blank=True, null=True); #ATRIBUTO DE TIPO email() (CORREO)
    telefono = models.IntegerField(null=True); #ATRIBUTO DE TIPO int() (INT)
    genero = models.CharField(max_length=6); #ATRIBUTO DE TIPO CharVar() (STRING)
    imagen = models.ImageField(upload_to="Fotos", null=True); #ATRIBUTO TIPO (IMAGEN)
    institucion = models.ForeignKey(Institucion, on_delete=models.CASCADE, null=False);

    def __str__(self):
        return self.nombre + self.apellido;

#--------------------------------------------------------------------------------------------------------------------
class Curso(models.Model):
    nombre = models.CharField(max_length=45); #ATRIBUTO DE TIPO CharVar() (STRING)
    
    persona = models.ManyToManyField(Persona)
    institucion = models.ForeignKey(Institucion, on_delete=models.CASCADE);

    nivel = models.IntegerField(); #ATRIBUTO DE TIPO int() (INT)
    disponibilidad = models.BooleanField();  #ATRIBUTO DE TIPO BOOLEAN() (Boolean)
    descripcion = models.CharField(max_length=150); #ATRIBUTO DE TIPO CharVar() (STRING)
    imagen = models.ImageField(upload_to="Fotos_Curso", null=True); #ATRIBUTO TIPO (IMAGEN)

    def __str__(self):
        return "NOMBRE: " + self.nombre + "NIVEL: " + str(self.nivel) + "DESCRIPCION: " + self.descripcion;
#---------------------------------------------------------------------------------------------------------------

class Tarea(models.Model):
    nombre = models.CharField(max_length=45); #ATRIBUTO DE TIPO CharVar() (STRING)
    materiales = models.FileField(null=True); #ATRIBUTO DE TIPO (FILE)
    descripcion = models.CharField(max_length=300); #ATRIBUTO DE TIPO CharVar() (STRING)
    Envio_Tare = models.FileField(null=True); #ATRIBUTO DE TIPO (FILE)

    curso = models.ForeignKey(Curso, on_delete=models.CASCADE, null=False, blank=False); #RELACION FOREIGNKEY

    calificacion = models.IntegerField(null=True);

    def __str__(self):
        return self.nombre;