import { StyleSheet } from "react-native";

export const colors = {
    primary:'#293241',
    secondary:'#1F2632',
    accent:'#3D5A80',
    complimentary:'#EDAFB8',
    contrast:'#E0FBFC',
}

export const globalStyles = StyleSheet.create({
    container:{
        justifyContent:'flex-start',
        alignContent:'center',
        backgroundColor:colors.primary,
        flex:1,
    }
})