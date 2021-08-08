import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Recover extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <article className="container">
        <div className="register-page-global-container">
          <h1>Registrarme</h1>
          <form
            action=""
            method="post"
            className="form-container login-form"
            onSubmit={this.handleSubmit}
          >
            <div className="term-conditions-container">
              <div className="espaciado">
                {" "}
                <p className="term-conditions-title">TÉRMINOS Y CONDICIONES</p>
              </div>
              <p>
                {" "}
                El presente contrato describe los términos y condiciones
                aplicables al uso del contenido, productos y/o servicios del
                sitio web Base del cual es titular Juan Cruz Deccechis.
                Para hacer uso del contenido, productos y/o servicios del sitio
                web el usuario deberá sujetarse a los presentes términos y
                condiciones.
              </p>
              <div className="espaciado">
                {" "}
                <p className="term-conditions-title">I. OBJETO</p>
              </div>
              <p>
                El objeto es regular el acceso y utilización del contenido,
                productos y/o servicios a disposición del público en general en
                el dominio https://www.Base.com. El titular se reserva el
                derecho de realizar cualquier tipo de modificación en el sitio
                web en cualquier momento y sin previo aviso, el usuario acepta
                dichas modificaciones. El acceso al sitio web por parte del
                usuario es libre y gratuito, la utilización del contenido,
                productos y/o servicios implica un costo de suscripción para el
                usuario. El sitio web solo admite el acceso a personas mayores
                de edad y no se hace responsable por el incumplimiento de esto.
                El sitio web está dirigido a usuarios residentes en México y
                cumple con la legislación establecida en dicho país, si el
                usuario reside en otro país y decide acceder al sitio web lo
                hará bajo su responsabilidad. La administración del sitio web
                puede ejercerse por terceros, es decir, personas distintas al
                titular, sin afectar esto los presentes términos y condiciones.
              </p>
              <div className="espaciado">
                {" "}
                <p className="term-conditions-title">II. USUARIO</p>
              </div>
              <p>
                La actividad del usuario en el sitio web como publicaciones o
                comentarios estarán sujetos a los presentes términos y
                condiciones. El usuario se compromete a utilizar el contenido,
                productos y/o servicios de forma lícita, sin faltar a la moral o
                al orden público, absteniéndose de realizar cualquier acto que
                afecte los derechos de terceros o el funcionamiento del sitio
                web. El usuario se compromete a proporcionar información
                verídica en los formularios del sitio web. El acceso al sitio
                web no supone una relación entre el usuario y el titular del
                sitio web. El usuario manifiesta ser mayor de edad y contar con
                la capacidad jurídica de acatar los presentes términos y
                condiciones.
              </p>
              <div className="espaciado">
                {" "}
                <p className="term-conditions-title">III. ACCESO Y NAVEGACIÓN EN EL SITIO WEB</p>
              </div>
              <p>
                El titular no garantiza la continuidad y disponibilidad del
                contenido, productos y/o servicios en el sitito web, realizará
                acciones que fomenten el buen funcionamiento de dicho sitio web
                sin responsabilidad alguna. El titular no se responsabiliza de
                que el software esté libre de errores que puedan causar un daño
                al software y/o hardware del equipo del cual el usuario accede
                al sitio web. De igual forma, no se responsabiliza por los daños
                causados por el acceso y/o utilización del sitio web.
              </p>
              <div className="espaciado">
                {" "}
                <p className="term-conditions-title">IV. POLÍTICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS</p>
              </div>
              <p>
                Conforme a lo establecido en la Ley Federal de Protección de
                Datos Personales en Posesión de Particulares, el titular de
                compromete a tomar las medidas necesarias que garanticen la
                seguridad del usuario, evitando que se haga uso indebido de los
                datos personales que el usuario proporcione en el sitio web. El
                titular corroborará que los datos personales contenidos en las
                bases de datos sean correctos, verídicos y actuales, así como
                que se utilicen únicamente con el fin con el que fueron
                recabados. El uso de datos personales se limitará a lo previsto
                en el Aviso de Privacidad disponible en
                https://www.Base.com/aviso-de-privacidad. Base se
                reserva el derecho de realizar cualquier tipo de modificación en
                el Aviso de Privacidad en cualquier momento y sin previo aviso,
                de acuerdo con sus necesidades o cambios en la legislación
                aplicable, el usuario acepta dichas modificaciones. El sitio web
                implica la utilización de cookies que son pequeñas cantidades de
                información que se almacenan en el navegador utilizado por el
                usuario como datos de ingreso, preferencias del usuario, fecha y
                hora en que se accede al sitio web, sitios visitados y dirección
                IP, esta información es anónima y solo se utilizará para mejorar
                el sitio web. Los cookies facilitan la navegación y la hacen más
                amigable, sin embargo, el usuario puede desactivarlos en
                cualquier momento desde su navegador en el entendido de que esto
                puede afectar algunas funciones del sitio web.
              </p>
            </div>

            <div className="login-links-container espaciado">
              <NavLink to="/login/register/step2" activeClassName="">
                <span>Registrarme</span>
              </NavLink>
            </div>
          </form>
        </div>
      </article>
    );
  }
}

export default Recover;
