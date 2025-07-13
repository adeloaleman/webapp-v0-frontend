import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// @ts-ignore
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';


const FrameworksTitle = () => {
    const formula = `R_{\\mu\\nu} - \\frac{1}{2} R g_{\\mu\\nu} + \\Lambda g_{\\mu\\nu} = \\frac{8 \\pi G}{c^{4}} T_{\\mu\\nu}`;

    return (
        <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={10} lg={8}>
                <Typography variant='h2' fontWeight={700} textAlign="center" sx={{
                    fontSize: {
                        lg: '36px',
                        xs: '25px'
                    },
                    lineHeight: {
                        lg: '43px',
                        xs: '30px'
                    }
                }}>
                    Increase speed of your development and
                    <InlineMath math={formula} />
                </Typography>
            </Grid>
        </Grid>
    );
};

export default FrameworksTitle;
