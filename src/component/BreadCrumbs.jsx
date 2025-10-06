import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from 'react-router-dom';

const BreadCrumbs = ({ breadcrumbs }) => {
  return (
    <Stack spacing={2}>
      <Breadcrumbs separator={<NavigateNextIcon />} aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
};

export default BreadCrumbs;
