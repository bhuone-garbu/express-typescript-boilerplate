import { app } from './app';

// add any preflight checks

const PORT = process.env.PORT || 4000;

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server listening at ${PORT}`));
