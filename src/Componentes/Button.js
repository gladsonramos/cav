import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Buttons({ texto, onClick }) {
    return (
        <Stack spacing={2} direction="row">
            <Button onClick={onClick} variant="contained">{texto}</Button>
        </Stack>
    );
}