//mypreset.ts
import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

const PresetCustom = definePreset(Aura, {
      semantic: {
        primary: {
            50:  '#fff8e5',
            100: '#feecbf',
            200: '#fcd98a',
            300: '#fbc455',
            400: '#f2b136',
            500: '#eaad2e',
            600: '#d99520',
            700: '#a87420',
            800: '#805518',
            900: '#55360f',
            950: '#2b1c08'
        }
    }
});

export default PresetCustom;