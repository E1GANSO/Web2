from django.contrib import admin
from MiSalud.models import Institucion, Persona, Tipo, Curso, Tarea


# Register your models here.
admin.site.register(Institucion);
admin.site.register(Persona);
admin.site.register(Tipo);
admin.site.register(Curso);
admin.site.register(Tarea);
