import { ClipLoader } from 'react-spinners'

const override = {
    display: 'block',
    margin: '100px auto',
}

const Spinner = () => {
  return (
    <ClipLoader
        color='#3b82f6'
        loading={true}
        size={150}
        cssOverride={override}
        aria-label='Loading...'
        data-testid='loading'
    />
  )
}

export default Spinner