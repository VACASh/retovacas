import React, { Component } from "react"
import imgVacas from "../vacas.jpg"
import videoMariona from "../mariona.mp4"
import videoEsther from "../esther.mp4"
import videoPapa from "../papa.mp4"
import videoSergio from "../sergio.mp4"
import videoLuci from "../luci.mp4"
import videoJulian from "../julian.mp4"
import videoCarlosGrau from "../carlosgrau.mp4"
import videoJuanpe from "../juanpe.mp4"
import videoLauCrisLau from "../laucrislau.mp4"
import { Icononovideo } from "../components/iconnovideo"
import { Iconoyotube } from "../components/iconoyotube"
import { NoChecked } from "../components/noChecked"
import { Checked } from "../components/checked"

export class ListaVacas extends Component {
    render() {


        return (

            <div className="container">

                <div className="card mx-auto col-sm-8"  >
                    <img className="card-img-top" src={imgVacas} alt="Familia Vacas" />
                    <div className="card-header">


                        <h4 className="card-title">Retos harina familia Vacas</h4>
                    </div>
                    <h5 className="card-title bg-light">Ya retados</h5>
                    <ul className="list-group rounded bg-light">
                        <li className="list-group-item bg-light">
                            <Icononovideo />
                            <i className="fa float-left">Nacho Vacas Matencio</i>
                            <NoChecked />
                        </li>
                        <li className="list-group-item bg-light">
                            <Icononovideo />
                            <i className="fa float-left">Diego Vacas Matencio</i>
                            <NoChecked />
                        </li>
                        <li className="list-group-item bg-light">
                            <a download href={videoMariona}><Iconoyotube /></a>

                            <i className="fa float-left">Mariona Vacas Matencio</i>
                            <Checked />
                        </li>
                        <li className="list-group-item bg-light">
                            <a href={videoPapa} download><Iconoyotube /></a>
                            <i className="fa float-left">Idaira Arias Vacas </i>
                            <Checked />
                        </li><li className="list-group-item bg-light">
                            <Icononovideo />
                            <i className="fa float-left">Abel Arias Vacas</i>
                            <Checked />
                        </li>
                        <li className="list-group-item bg-light">
                            <Icononovideo />
                            <i className="fa float-left">Pedro Abel Arias Más</i>
                            <Checked />
                        </li>
                        <li className="list-group-item bg-light">
                            <a href={videoEsther} download><Iconoyotube /></a>
                            <i className="fa float-left">Esther Vacas Rodilla</i>
                            <Checked />
                        </li>
                        <li className="list-group-item bg-light">
                            <a href={videoPapa} download><Iconoyotube /></a>
                            <i className="fa float-left">Diego Vacas Moreno</i>
                            <Checked />
                        </li>
                        <li className="list-group-item bg-light">
                            <Icononovideo />
                            <i className="fa float-left">Antonio Vacas Moreno</i>
                            <NoChecked />
                        </li>
                        <li className="list-group-item bg-light">
                            <a href={videoJulian} download><Iconoyotube /></a>
                            <i className="fa float-left">Julian Vacas Moreno</i>
                            <Checked />
                        </li>
                        <li className="list-group-item bg-light">
                            <a href={videoLuci} download><Iconoyotube /></a>
                            <i className="fa float-left">Lucia Jurado Torres</i>
                            <Checked />
                        </li>
                        <li className="list-group-item bg-light">
                            <a href={videoSergio} download><Iconoyotube /></a>
                            <i className="fa float-left">Sergio Vacas López</i>
                            <Checked />
                        </li>
                        <li className="list-group-item bg-light">
                            <a href={videoLauCrisLau} download><Iconoyotube /></a>
                            <i className="fa float-left">Laura Vacas López</i>
                            <Checked />
                        </li>
                        <li className="list-group-item bg-light">
                        <Icononovideo />
                            <i className="fa float-left">Carlos Vacas Rodilla</i>
                            <NoChecked />
                        </li>
                        <li className="list-group-item bg-light">
                            <a href={videoLauCrisLau} download><Iconoyotube /></a>
                            <i className="fa float-left">Laura Grau</i>
                            <Checked />
                        </li>
                        <li className="list-group-item bg-light">
                            <a href={videoCarlosGrau} download><Iconoyotube /></a>
                            <i className="fa float-left">Carlos Grau</i>
                            <Checked />
                        </li>
                        <li className="list-group-item bg-light">
                            <a href={videoJuanpe} download><Iconoyotube /></a>
                            <i className="fa float-left">Juanpe Vacas</i>
                            <Checked />
                        </li>

                    </ul>

                </div>

            </div >



        )
    }
}