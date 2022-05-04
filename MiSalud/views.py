from django.contrib import messages
from django import views
from django.shortcuts import render
from django.contrib.auth.models import User;
from django.contrib.auth import login
from django.views.generic import View


# Create your views here.
def Inicio(request):
    return render(request, "index.html");

def Cursos(request):
    return render(request, "cursos.html");


#------------------------------------------------------
class VRegistro(View):
    def registarse(request):   
        if request.method=='POST':
            nom = request.POST['username'];
            apell = request.POST['Apellido'];
            cor = request.POST['email'];
            inst = request.POST['select'];
            tele = request.POST['phone'];
            ocup = request.POST['radio'];
            sex = request.POST['radio1'];
            passw = request.POST['password'];
            passw1 = request.POST['password1'];

            if(passw == passw1):
                usuario = User.objects.create(
                    password = passw1,
                    is_superuser = 0,
                    username = cor,
                    first_name = nom,
                    last_name = apell,
                    email = cor
                )
                messages.info(request, "USUARIO CREADO CORRECTAMENTE");

            else:
                messages.error(request, "LAS CONTRASEÑAS NO COINCIDEN");
        return render(request, "registro.html")

def Acceder(request):
    return render(request, "acceder.html");

def Info_Desarrollador(request):
    return render(request, "3.1_Hoja de vida/Hoja_1.html");

def Info_Diseñador(request):
    return render(request, "3.2_Hoja de Vida/Hoja_2.html");

def Game(request):
    return render(request, "Game/game.html");


def login(request):
    return render(request, "login/login.html");
    