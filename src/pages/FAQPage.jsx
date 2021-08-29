import React, { Component } from "react";
import FAQ from '../components/faq/FAQ';

class FAQPage extends Component {

    render() {
        return (
            <article className="container">
                <div>
                    <h2>Preguntanos</h2>
                    <p>Puedes contactarnos al 0800-sp.five, en caso que la siguiente lista no resuelva tu consulta.</p>
                    <FAQ />
                </div>
            </article>
        );
    }
}

export default FAQPage;
