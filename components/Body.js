import { Text } from 'react-native';
import Calculator from './Calculator';
import TestTiles from './TestTiles';

export default function Body({selectedTab}) {
    switch(selectedTab) {
        case 0:
            console.log("Calc")
            return (<Calculator/>)
        case 1:
            console.log("Test Tiles")
            return (<TestTiles/>)
        case 2:
            // code block
            break;
        default:
            console.log("Calc")
            return (<Calculator/>)
      }
}