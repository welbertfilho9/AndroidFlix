import React, {useState} from 'react'
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import FormField from '../../../components/FormField';


function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  }

  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
      setValues({
        ...values,
        [chave]: valor,
      })
  }

  function handleChange(evento) {
    setValue(
      evento.target.getAttribute('name'),
      evento.target.value
    );
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

            setValues(valoresIniciais)
        }}>

        <FormField
          label='Nome da Categoria'
          value={values.nome}
          name='nome'
          type = 'text'
          onChange={handleChange}
        />

        <FormField
          label='Descrição da Categoria'
          value={values.descricao}
          name='descricao'
          type = 'text'
          onChange={handleChange}
        />

        <FormField
          label='Cor da Categoria'
          value={values.cor}
          name='cor'
          type = 'color'
          onChange={handleChange}
        />
        
        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
            return (
              <li key={`${categoria}${indice}`}>
                {categoria.nome}
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