from django import forms;
"""
grupo_Institucion = ('Independiente', 'Colegio Divino Jesús', 'Colegio Bilingüe de Santa Marta', 'Liceo Caribe - Santa Marta', 'Colegio Divino Niño');

sexo = ('Hombre', 'Mujer');

cargo = ('Docente', 'Estudiante');

class Registro(forms.Form):
    nombre = forms.CharField(required=True);
    apellido = forms.CharField(required=True);
    email = forms.EmailField(required=True);
    institucion = forms.ChoiceField(choices=grupo_Institucion, required=True, label="Seleccione Institucion");
    tel = forms.IntegerField(max_value=10, required=False);
    ocupacion = forms.ChoiceField(widget=forms.RadioSelect, choices=cargo, required=True, label="Ocupacion");
    genero = forms.ChoiceField(widget=forms.RadioSelect, choices=sexo, required=True, label="Sexo");
    password = forms.PasswordInput();
"""