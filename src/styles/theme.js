const globalTheme = {
  switchWidth: '40px',
  switchHeight: '20px',
  switchPadding: '3px',
  colorContrastLow: '#d3d3d4',
  colorWhite: '#FFF',
  switchColorPrimary: '#044a49',
  switchAnimationDuration: '0.2s',
  gradient: 'linear-gradient(122deg, rgb(2, 66, 129) 0%, rgb(50, 175, 224) 100%)',
  colorGreen: '#5DC399',
  colorGray: '#ccdada',
}


export const lightTheme = {
  primary: '#FFF',
  secondary: '#F8F8F8',
  textColor: 'rgb(2, 66, 129)',
  header: '#585280',
  headerNumber: '#FFF',
  activeMenu: '#585280',
  ...globalTheme
}

export const darkTheme = {
  primary: '#1b3736',
  secondary: '#1b3736',
  textColor: '#FFF',
  header: '#FFF',
  headerNumber: '#585280',
  activeMenu: '#FFF',
  ...globalTheme
}