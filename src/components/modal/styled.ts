import { styled } from '@mui/material/styles';
import { Modal as MuiModal } from '@mui/material';
import { ModalProps } from './types';

export const StyledModal = styled(MuiModal, {
  shouldForwardProp: prop => ![''].includes(String(prop)),
})<ModalProps>(({ theme }) => ({

}));
