import { Routes } from "@angular/router"
import { Component } from "@angular/core"
import { InicioSesionComponent } from "./inicio-sesion.component"

export const AUTH_ROUTES: Routes=[

    {path:'sesion',component: InicioSesionComponent}
]