import { SafeAreaView, View, FlatList, StyleSheet, Dimensions, Image } from "react-native";
import datasource from "../data/datasource";

const MemesScreen = () => {
    const memes = datasource.memes;

    const renderItem = ({ item }) => {
        return (
            <View style={styles.containerImage}>
                <Image style={styles.image} source={item.image} />
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={memes}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                numColumns={1}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContainer}
            />
        </SafeAreaView>
    );
}

const aspectRatio = 5 / 5;
const screenWidth = Dimensions.get('window').width;
const imageWidth = screenWidth - 40; // Ajuste a margem conforme necessário
const imageHeight = imageWidth / aspectRatio;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 30
    },
    containerImage: {
        width: screenWidth,
        alignSelf: 'center',
        paddingVertical: 10
    },
    image: {
        width: imageWidth,
        height: imageHeight,
        alignSelf: 'center',
    },
    listContainer: {
        marginBottom: 50,
        paddingBottom: 50
    }
});

export default MemesScreen;
