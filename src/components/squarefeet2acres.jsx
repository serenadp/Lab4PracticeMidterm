import { Text, View,} from 'react-native';
import { squareFeetToAcres } from '../squarefeet2acres.js';

// input: square feet
export function SquareFeetToAcres({ sqft }) {
  // processing
  let acres = squareFeetToAcres(sqft);

  return (
    <View>
      <Text>
        squareFeetToAcres({sqft}) returned {acres}
      </Text>
    </View>
  );
}