import React, { useState, useEffect } from 'react';
import Dialog from 'react-native-dialog'; // Certifique-se de instalar: react-native-dialog
import { useMeta } from '../context/MetaContext';
import COLORS from '../constants/colors'

export const MetaDialog = ({ visivel, onFechar }) => {
  const { meta, setMeta } = useMeta();
  // Estado local para o input não travar a renderização global enquanto o usuário digita
  const [valorInput, setValorInput] = useState('');

  // Sincroniza o valor atual da meta quando o dialog abre
  useEffect(() => {
    if (visivel) {
      setValorInput(meta.toString());
    }
  }, [visivel, meta]);

  const handleSalvar = () => {
    if (valorInput.trim() === '') {
      alert('Por favor, insira um valor válido para a meta.');
      return;
    } else if (isNaN(valorInput) || parseFloat(valorInput) <= 0) {
      alert('Por favor, insira um número válido maior que zero.');
      return;
    }
    
    setMeta(valorInput);
    onFechar();
  };

  return (
    <Dialog.Container visible={visivel} onBackdropPress={onFechar}>
      <Dialog.Title>Alterar Meta</Dialog.Title>
      <Dialog.Description>
        Digite o novo valor para a sua meta atual.
      </Dialog.Description>
      <Dialog.Input
        keyboardType="numeric"
        value={valorInput}
        onChangeText={setValorInput}
        placeholder="Ex: 1500"
      />
      <Dialog.Button label="Cancelar" onPress={onFechar} color={COLORS.danger} />
      <Dialog.Button label="Salvar" onPress={handleSalvar} />
    </Dialog.Container>
  );
};
