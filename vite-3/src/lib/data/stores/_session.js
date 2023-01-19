// import { writable } from 'svelte/store';
import { localStore } from '../utils/localStore';

export const _session = localStore('nwp_session', {
    op1: false,
    op2: false,
    op3: false,
    op4: false
});

