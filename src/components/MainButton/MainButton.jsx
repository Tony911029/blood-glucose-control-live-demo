import { CircularProgress } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { Button } from '@material-ui/core'

const useStyles = makeStyles()((theme, { disabled }) => ({
  mainButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8px 20px',
    whiteSpace: 'pre',
    boxShadow: '0px 2px 4px rgba(142, 219, 240, 0.2)',
    borderRadius: '4px',
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: '0px 4px 15px rgba(142, 219, 240, 0.4)',
      transform: 'translateY(-1px)',
      background: disabled ? '#D3D3D3 !important' : '#7dcbe0 !important',
    },
    background: disabled ? '#D3D3D3 !important' : '#8edbf0 !important',
    backgroundColor: disabled ? '#D3D3D3' : '#8edbf0',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '600 !important',
    color: '#29779a !important',
    fontSize: '0.95rem',
    letterSpacing: '0.5px',
  },
  testButton: {
    background: disabled ? '#D3D3D3 !important' : '#8edbf0 !important',
    backgroundColor: disabled ? '#D3D3D3' : '#8edbf0',
    '&:hover': {
      background: disabled ? '#D3D3D3 !important' : '#7dcbe0 !important',
      boxShadow: '0px 4px 15px rgba(142, 219, 240, 0.4)',
    }
  }
}))
function MainButton({
  isLoading,
  style,
  isSaved,
  type,
  disabled = false,
  onClick,
  onMouseDown,
  btnLabel,
  id,
  isLabelCapitalize = true,
  ariaExpanded = false,
  className,
  ...props
}) {
  const { classes } = useStyles({ disabled })
  return (
    <Button
      type={type}
      style={style}
      id={id}
      onMouseDown={onMouseDown}
      disabled={disabled || isLoading}
      className={`${className} ${
        isLabelCapitalize
          ? classes.mainButton
          : `${classes.mainButton} noCapitalize`
      }`}
      onClick={onClick || (() => {})}
      aria-expanded={ariaExpanded ? 'true' : undefined}
      {...props}
    >
      {isLoading ? (
        <span
          style={{
            marginRight: '10px',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {' '}
          <CircularProgress
            size={15}
            style={{
              marginRight: '10px',
              display: 'flex',
              alignItems: 'center'
            }}
          />{' '}
          Saving
        </span>
      ) : isSaved ? (
        'Saved'
      ) : (
        btnLabel
      )}
    </Button>
  )
}

export default MainButton
