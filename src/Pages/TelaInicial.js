import '../App.css';
import axios from "axios";
import React, { useState } from 'react';
import StickyFooter from '../Componentes/Rodape';
import Selects from '../Componentes/Selects';
import Buttons from '../Componentes/Button';
import Espacamento from '../Componentes/Espacamento';
import { TesteRe } from './teste';

function TelaInicial() {
  const api = axios.create({
    baseURL: "http://52.188.10.0:3002/teste",
  });

  const [formValues, setFormValues] = useState({
    arqueologia: 0,
    area: 19.34,
    volume: 20.88,
    projecao_horizontal: 7.67,
    anfibios: 0,
    dificuldade_e: 0,
    dificuldade_i: 0,
    f_drenagem: 0,
    f_bloco_abat: 0,
    f_canaliculos: 0,
    f_claraboias: 0,
    f_conduto: 0,
    f_percolacao: 0,
    i_gen_u: 0,
    d_notaveis: 0,
    invertebrados: 0,
    iv_espeleotemas_u: 0,
    mamifero: 0,
    morcegos: 0,
    ninhos: 0,
    guano: 0,
    raizes: 0,
    repteis: 0,
    n_animais: 0,
    espeleotema_crosta: 0,
    esp_estalactites: 0,
    esp_travertinos: 0,
    esp_coraloides: 0,
    esp_escorrimentos: 0,
    esp_estalagmites: 0,
    v_iso_geo: 0,
    vi_abrigo_ess: 0,
    vii_habitat: 0,
    viii_habitat_trog: 0,
    x_cav_test: 0,
    xi_rel_hist_c: 0,
    zona_afotica: 0,
    ii_m_unic: 0,
  });

  const selectsData = [
    { title: "Arqueologia", property: "arqueologia", inline: true },
    { title: "Anfíbios", property: "anfibios", inline: true },
    { title: "Dificuldade E", property: "dificuldade_e" },
    { title: "Dificuldade I", property: "dificuldade_i" },
    { title: "F Drenagem", property: "f_drenagem" },
    { title: "F Bloco Abat", property: "f_bloco_abat" },
    { title: "F Canaliculos", property: "f_canaliculos" },
    { title: "F Claraboias", property: "f_claraboias" },
    { title: "F Conduto", property: "f_conduto" },
    { title: "F Percolação", property: "f_percolacao" },
    { title: "I Gen U", property: "i_gen_u" },
    { title: "D Notáveis", property: "d_notaveis" },
    { title: "Invertebrados", property: "invertebrados" },
    { title: "IV Espeleotemas U", property: "iv_espeleotemas_u" },
    { title: "Mamífero", property: "mamifero" },
    { title: "Morcegos", property: "morcegos" },
    { title: "Ninhos", property: "ninhos" },
    { title: "Guano", property: "guano" },
    { title: "Raízes", property: "raizes" },
    { title: "Répteis", property: "repteis" },
    { title: "N Animais", property: "n_animais" },
    { title: "Espeleotema Crosta", property: "espeleotema_crosta" },
    { title: "Esp Estalactites", property: "esp_estalactites" },
    { title: "Esp Travertinos", property: "esp_travertinos" },
    { title: "Esp Coraloides", property: "esp_coraloides" },
    { title: "Esp Escorrimentos", property: "esp_escorrimentos" },
    { title: "Esp Estalagmites", property: "esp_estalagmites" },
    { title: "V Iso Geo", property: "v_iso_geo" },
    { title: "VI Abrigo Ess", property: "vi_abrigo_ess" },
    { title: "VII Habitat", property: "vii_habitat" },
    { title: "VIII Habitat Trog", property: "viii_habitat_trog" },
    { title: "X Cav Test", property: "x_cav_test" },
    { title: "XI Rel Hist C", property: "xi_rel_hist_c" },
    { title: "Zona Afótica", property: "zona_afotica" },
    { title: "II M Unic", property: "ii_m_unic" },
  ];

  const [Dados, setDados] = useState("");
  const [message, setMessage] = useState("");

  console.log(selectsData.length)

  const handleSubmit = () => {
    setDados("AGUARDE...");
    api
      .post("https://52.188.10.0:3002/teste", formValues)
      .then((response) => {
        setMessage(null);
        setDados(response.data);
      })
      .then(() => {
        setMessage("Dados Enviados Com Sucesso");
      })
      .catch((err) => {
        setMessage(err?.response?.data);
      });
  };

  const handleChange = (event, property) => {
    const { value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [property]: value,
    }));
    console.log(value)
  };

  console.log(formValues)
  const { teste, vai } = TesteRe()
  console.log(teste, 'teste')

  return (
    <StickyFooter>
      <div className="selects-container">
        SEU RESULTADO: {Dados}
        <Espacamento tamanho={20} />
        <div className="selects-row">
          {selectsData.slice(0, Math.ceil(selectsData.length / 1)).map((select) => (
            <Selects
              key={select.property}
              Titulo={select.title}
              onChange={(event) => handleChange(event, select.property)}
              value={formValues[select.property]}
            />
          ))}
        </div>
        <div className="selects-row">
          {selectsData.slice(Math.ceil(selectsData.length / 1)).map((select) => (
            <Selects
              key={select.property}
              Titulo={select.title}
              onChange={(event) => handleChange(event, select.property)}
              value={formValues[select.property]}
            />
          ))}
        </div>
        <div style={{ fontWeight: 600, color: 'green' }}>
          {message}
        </div>
        <Espacamento tamanho={20} />
        <Buttons texto={"CONFIRMAR"} onClick={() => handleSubmit()} />
      </div>

    </StickyFooter >
  );
}

export default TelaInicial;
