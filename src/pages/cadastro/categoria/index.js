import React, {useState} from 'react'
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


function CadastroCategoria() {
  const [categorias, setCategorias] = useState(['Teste']);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#fff'
  }

  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
      setValues({
        ...values,
        [chave]: valor,
      })
  }

    return (
      <PageDefault>
        <h1>
           Cadastrar Categoria: {values.nome}
        </h1>

        <form onSubmit={function handleSubmit(event) {
            event.preventDefault();
            setCategorias([
              ...categorias,
              values
            ]);
        }}>

        <div>
        <label>
          Nome da Categoria:
          <input
            type="text"
            value={values.nome}
            onChange={function funcaoAleatoria(evento) {
              setValue('nome',evento.target.value);
            }}
          />
        </label>
        </div>
        
        <div>
        <label>
          Descrição:
          <textarea
            type="text"
            value={values.descricao}
            onChange={function funcaoAleatoria(evento) {
              setValue('descricao',evento.target.value);
            }}
          />
        </label>
        </div>
        
        <div>
        <label>
          Cor:
          <input
            type="color"
            value={values.cor}
            onChange={function funcaoAleatoria(evento) {
                setValue('cor',evento.target.value);
            }}
          />
        </label>
        </div>
       

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
            return (
              <li key={`${categoria}${indice}`}>
                {categoria}
              </li>
            )
        })}
      </ul>

        <Link to="/">
            Ir para home
        </Link>
      </PageDefault>
    )
  }

export default CadastroCategoria;  