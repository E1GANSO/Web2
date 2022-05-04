from django.urls import path;
from MiSalud import views;


urlpatterns = [
    path('', views.Inicio, name="Home"),
    path('Cursos/', views.Cursos, name="Cursos"),
    path('Acceder/', views.Acceder, name="Acceder"),
    path('Registro/', views.VRegistro.registarse, name="Registro"),
    path('Game/', views.Game, name="Game"),
    path('info_des/', views.Info_Desarrollador, name="Info_Des"),
    path('info_dis/', views.Info_Diseñador, name="Info_Dis"),
    path('login/', views.login, name="login"),
]
