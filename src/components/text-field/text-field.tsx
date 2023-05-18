import React, { FC } from 'react';
// import { Controller, UseControllerProps } from 'react-hook-form';
// import { useTranslation } from 'react-i18next';

// import {
//   IconCircleError,
//   IconTriangleWarning,
//   IconSearch,
// } from '@mzc-cloudplex/icons';
// import theme from '@theme';
// import fp from 'lodash/fp';

// import { TextFieldProps } from '@mui/material';

import { StyledTextField } from './styled';
import { ITextFieldProps } from './types';

/* types */
// import { StyledTextField } from './styled';
// import { TextFieldProps } from './types';

// export const TextField: FC<TextFieldProps> = props => {
//   const {
//     type,
//     variant,
//     className,
//     id,
//     size,
//     placeholder,
//     error,
//     helperText,
//     multiline,
//     bytes,
//     sx,
//     InputProps,
//     value,
//     disabled,
//     onChange,
//     onKeyDown,
//     maxRows,
//     inputStyle,
//     isEdit,
//     ...rest
//   } = props;

//   const getEndAdornment = useMemo(() => {
//     if (error) {
//       if (!helperText)
//         return <IconTriangleWarning color={'warning'} size={16} />;
//       return <IconCircleError color={`error`} size={16} />;
//     }
//     return undefined;
//   }, [error, helperText]);

//   return (
//     <Box
//       sx={{
//         ...sx,
//         position: `relative`,
//       }}
//     >
//       <StyledTextField
//         type={type}
//         variant={variant}
//         className={className}
//         id={id}
//         label={null}
//         size={size}
//         placeholder={placeholder}
//         error={error}
//         helperText={helperText}
//         multiline={multiline}
//         defaultValue={value}
//         disabled={disabled}
//         InputProps={{
//           ...InputProps,
//           startAdornment:
//             type === 'search' ? (
//               <IconSearch size={16} />
//             ) : (
//               InputProps?.startAdornment
//             ),
//           endAdornment: getEndAdornment,
//         }}
//         onChange={onChange}
//         onKeyDown={onKeyDown}
//       />
//       {type === 'textarea' && (
//         <Typography
//           sx={{
//             position: `absolute`,
//             bottom: `16px`,
//             right: `16px`,
//           }}
//           color={theme.palette.secondary[400]}
//           variant={'body2'}
//         >
//           {bytes}/2000byte
//         </Typography>
//       )}
//     </Box>
//   );
// };

// interface ITextFieldProps extends UseControllerProps {
//   errorText?: ReactNode;
// }
// export const TextField: React.FC<ITextFieldProps & TextFieldProps> = props => {
//   const {
//     control,
//     name,
//     rules,
//     errorText,
//     helperText,
//     defaultValue,
//     inputProps,
//     shouldUnregister,
//     ...restProps
//   } = props;

//   const { t } = useTranslation('common');

//   const blockTextInput = useCallback(
//     (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
//       if (type !== 'tel' && type !== 'number') return;
//       e.target.value = e.target.value.replace(/[^0-9]/g, '');
//     },
//     []
//   );
//   ``;

//   const isValueEmpty = useCallback((type: string) => type === `required`, []);

//   return (
//     <Controller
//       name={name}
//       control={control}
//       rules={rules}
//       defaultValue={defaultValue}
//       shouldUnregister={shouldUnregister}
//       render={({ field: { onChange, value, name }, formState: { errors } }) => (
//         <MuiTextField
//           value={value}
//           name={name}
//           // rules={rules}
//           error={!fp.isEmpty(fp.get(name, errors))}
//           // onClear={() => onChange('')}
//           onChange={onChange}
//           inputProps={{
//             name,
//             onInput: (e: React.ChangeEvent<HTMLInputElement>) =>
//               blockTextInput(e, inputProps?.type),
//             ...inputProps,
//           }}
//           helperText={
//             !fp.isEmpty(fp.get(name, errors))
//               ? isValueEmpty(fp.get(name, errors)?.type as string)
//                 ? t(`Required field`)
//                 : errorText
//               : helperText
//           }
//           {...restProps}
//         />
//       )}
//     />
//   );
// };

export const TextField: FC<ITextFieldProps> = ({ ...restProps }) => {
  return <StyledTextField {...restProps} />;
};
