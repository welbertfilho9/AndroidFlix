import React from 'react'
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


function CadastroCategoria() {
    return (
      <PageDefault>
        <h1>
           Cadastrar Categoria
        </h1>

        <form>

        <label>
          Nome da Categoria:
          <input
            type="text"
          />
        </label>

        <button>
          Cadastrar
        </button>
      </form>

        <Link to="/">
            Ir para home
        </Link>
      </PageDefault>
    )
  }

export default CadastroCategoria;  
