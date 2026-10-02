
import { StyleSheet, Text, View, Image} from 'react-native';
import COLORS from '../constants/colors';

export default function HealthTip(){
    return(
        <View style={styles.container}>
            <Image style={styles.imageTip} source={require('../static/img/lampada.png')}/>
            <View>
                <Text style={styles.titleTip}>Dica de saúde</Text>
                <Text style={styles.descriptionTip}>Beber água regularmente melhora a concentração, a digestão e mantém sua energia alta ao longo do dia!</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 48,
    alignItems: 'center'
  },
  imageTip: {

    width: 50,
    height: 50,
  },
  titleTip: {
    fontWeight: 700,
    color: COLORS.textMain
  },
  descriptionTip: {
    color: COLORS.textMuted
  }
});
