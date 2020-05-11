import React, { Component } from "react"
import imgVacas from "../vacas.jpeg"
import videoMariona from "../mariona.mp4"
import videoEsther from "../esther.mp4"
import videoPapa from "../papa.mp4"



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
                            <div className="md-v-line"></div>
                            <i className="fa fa-youtube-play fa-lg  mr-5 float-left">
                            </i><i className="fa float-left">Nacho Vacas Matencio</i>
                            <i class="fa fa-times-circle fa-lg text-danger ml-5 float-right" ></i>
                        </li>
                        <li className="list-group-item bg-light">
                            <div className="md-v-line"></div>
                            <i className="fa fa-youtube-play fa-lg  mr-5 float-left">
                            </i><i className="fa float-left">Diego Vacas Matencio</i>
                            <i class="fa fa-times-circle fa-lg text-danger ml-5 float-right" ></i>
                        </li>
                        <li className="list-group-item bg-light">
                            <div className="md-v-line"></div>
                            <a href={videoMariona} download><i className="fa fa-youtube-play fa-lg text-danger mr-5 float-left">
                            </i></a>
                            <i className="fa float-left">Mariona Vacas Matencio</i>
                            <i class="fa fa-check fa-lg text-success ml-5 float-right" ></i>
                        </li>
                        <li className="list-group-item bg-light">
                            <div className="md-v-line"></div>
                            <a href={videoPapa} download><i className="fa fa-youtube-play fa-lg text-danger mr-5 float-left"></i></a>
                            <i className="fa float-left">Idaira Arias Vacas </i>
                            <i class="fa fa-check fa-lg text-success ml-5 float-right" ></i>
                        </li><li className="list-group-item bg-light">
                            <div className="md-v-line"></div>
                            <i className="fa fa-youtube-play fa-lg  mr-5 float-left">
                            </i><i className="fa float-left">Abel Arias Vacas</i>
                            <i class="fa fa-check fa-lg text-success ml-5 float-right" ></i>
                        </li>
                        <li className="list-group-item bg-light">
                            <div className="md-v-line"></div>
                            <i className="fa fa-youtube-play fa-lg  mr-5 float-left"></i>
                            <i className="fa float-left">Pedro Abel Arias Más</i>
                            <i class="fa fa-check fa-lg text-success ml-5 float-right" ></i>
                        </li>
                        <li className="list-group-item bg-light">
                            <div className="md-v-line"></div>
                            <a href={videoEsther} download><i className="fa fa-youtube-play fa-lg text-danger mr-5 float-left"></i></a>
                            <i className="fa float-left">Esther Vacas Rodilla</i>
                            <i class="fa fa-check fa-lg text-success ml-5 float-right" ></i>
                        </li>
                        <li className="list-group-item bg-light">
                            <div className="md-v-line"></div>
                            <a href={videoPapa} download><i className="fa fa-youtube-play fa-lg text-danger mr-5 float-left"></i></a>
                            <i className="fa float-left">Diego Vacas Moreno</i>
                            <i class="fa fa-check fa-lg text-success ml-5 float-right" ></i>
                        </li>


                    </ul>

                </div>

            </div>



        )
    }
}