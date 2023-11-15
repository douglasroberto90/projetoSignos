import "./ListaDeSignos.css";
import Titulo from "./Titulo";
import ItemLista from "./ItemLista";

export default function ListaDeSignos(){
    return(
        <div>
            <Titulo />
            <div className="lista">
                <ItemLista
                    signo="Aquário" dataInicio="21/01"
                    dataFim="19/02" imagem="/public/assets/aquario.jpg" />
                <ItemLista
                    signo="Peixes" dataInicio="20/02"
                    dataFim="20/03" imagem="/public/assets/peixes.jpg" />
                <ItemLista
                    signo="Áries" dataInicio="21/03"
                    dataFim="20/04" imagem="/public/assets/aries.jpg" />
                <ItemLista
                    signo="Touro" dataInicio="21/04"
                    dataFim="21/05" imagem="/public/assets/touro.jpg" />
                <ItemLista
                    signo="Gêmeos" dataInicio="22/05"
                    dataFim="21/06" imagem="/public/assets/gemeos.jpg" />
                <ItemLista
                    signo="Câncer" dataInicio="21/06"
                    dataFim="23/07" imagem="/public/assets/cancer.jpg" />
                <ItemLista
                    signo="Leão" dataInicio="24/07"
                    dataFim="23/08" imagem="/public/assets/leao.jpg" />
                <ItemLista
                    signo="Virgem" dataInicio="24/08"
                    dataFim="23/09" imagem="/public/assets/virgem.jpg" />
                <ItemLista
                    signo="Libra" dataInicio="24/09"
                    dataFim="23/10" imagem="/public/assets/libra.jpg" />
                <ItemLista
                    signo="Escorpião" dataInicio="24/10"
                    dataFim="22/11" imagem="/public/assets/escorpiao.jpg" />
                <ItemLista
                    signo="Sagitário" dataInicio="23/11"
                    dataFim="21/12" imagem="/public/assets/sagitario.jpg" />
                <ItemLista
                    signo="Capricórnio" dataInicio="22/12"
                    dataFim="20/01" imagem="/public/assets/capricornio.jpg" />
            </div>
        </div>
    );
}