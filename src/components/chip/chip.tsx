import React, { FC } from 'react';

import { ChipProps } from '@mui/material';

import { StyledChip } from './styled';

export const Chip: FC<ChipProps> = ({ ...restProps }) => {
  return <StyledChip {...restProps} />;
};

// MUI Chip 는 기본으로 임포트 해서 사용할 수 있도록 함
// Chip 가 여러개가 하나의 디자인을 가질 경우 , 해당 이름을 가진 Chip 로 묶어두고 사용
