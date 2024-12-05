import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const CriarTarefa = ({ handleClose, tarefas, setTarefas }) => {
  const [idTarefa, setIdTarefa] = useState();
  const [tituloTarefa, setTituloTarefa] = useState('');
  const [descricaoTarefa, setDescricaoTarefa] = useState('');
  const [inicioTarefa, setInicioTarefa] = useState('');
  const [fimTarefa, setFimTarefa] = useState('');
  const [recursoTarefa, setRecursoTarefa] = useState('');
  const [statusTarefa, setStatusTarefa] = useState('');

  useEffect(() => {
      //Abaixo uma variável é declarada para armazenar o id da tarefa, somando 1 ao maior id existente atualmente no state Tarefas
    let proximoId = Math.max(...tarefas.map((tarefa) => tarefa.idTarefa)) + 1;
    setIdTarefa(proximoId);
  }, []);

  const handleRecurso = (event) => {
    setRecursoTarefa(event.target.value);
  };

  const handleStatus = (event) => {
    setStatusTarefa(event.target.value);
  };

  const handleSalvar = () => {
    console.log(`id: ${idTarefa} \n titulo: ${tituloTarefa} \n descrição: ${descricaoTarefa}`);
    setTarefas([
      ...tarefas,
      {
        idTarefa,
        tituloTarefa,
        descricaoTarefa,
        inicioTarefa,
        fimTarefa,
        recursoTarefa,
        statusTarefa,
      },
    ]);
    handleClose();
  };

  return (
    <Grid container spacing={2}>
      <Card sx={style}>
        <CardHeader
          title="Tarefas"
          subheader="Cadastro de Tarefas"
          sx={{
            backgroundColor: 'black',
            color: 'white',
            padding: 2,
            borderRadius: '4px',
          }}
        />
        <CardContent sx={{ width: '95%', maxWidth: '100%' }}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <Input
                id="tarefa_titulo"
                aria-describedby="tarefa_titulo_helper_text"
                value={tituloTarefa}
                onChange={(e) => {
                  setTituloTarefa(e.target.value);
                }}
              />
              <FormHelperText id="tarefa_titulo_helper_text">Título da Tarefa.</FormHelperText>
            </FormControl>
          </Grid>
          {/* Restante do formulário continua inalterado */}
        </CardContent>
      </Card>
    </Grid>
  );
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: 'background.paper',
  p: 4,
};

export default CriarTarefa;
