function getServerMode() {
    return [
        {id: "Mode_ZoneControl0", title: "空降补给", value: 7, isChecked: false},
        {id: "Mode_AirAssault0", title: "空中突袭", value: 8, isChecked: false},
        {id: "Mode_TugOfWar0", title: "前线", value: 1, isChecked: false},
        {id: "Mode_Domination0", title: "抢攻", value: 5, isChecked: false},
        {id: "Mode_Breakthrough0", title: "闪击行动", value: 10, isChecked: false},
        {id: "Mode_Rush0", title: "突袭", value: 6, isChecked: false},
        {id: "Mode_TeamDeathMatch0", title: "团队死斗", value: 2, isChecked: false},
        {id: "Mode_BreakthroughLarge0", title: "行动模式", value: 12, isChecked: false},
        {id: "Mode_Possession0", title: "战争信鸽", value: 4, isChecked: false},
        {id: "Mode_Conquest0", title: "征服", value: 3, isChecked: false}
    ];
}

function getServerMap() {
    return [
        {id: "Mp_MountainFort", title: "格拉巴山", value: 4, isChecked: false},
        {id: "Mp_Forest", title: "阿尔贡森林", value: 11, isChecked: false},
        {id: "Mp_ItalianCoast", title: "帝国边境", value: 2, isChecked: false},
        {id: "Mp_Chateau", title: "流血宴厅", value: 7, isChecked: false},
        {id: "Mp_Scar", title: "圣康坦的伤痕", value: 8, isChecked: false},
        {id: "Mp_Desert", title: "西奈沙漠", value: 10, isChecked: false},
        {id: "Mp_Amiens", title: "亚眠", value: 1, isChecked: false},
        {id: "Mp_Suez", title: "苏伊士", value: 9, isChecked: false},
        {id: "Mp_FaoFortress", title: "法欧堡", value: 6, isChecked: false},
        {id: "Mp_Giant", title: "庞然暗影", value: 12, isChecked: false},
        {id: "Mp_Fields", title: "苏瓦松", value: 16, isChecked: false},
        {id: "Mp_Graveyard", title: "决裂", value: 5, isChecked: false},
        {id: "Mp_Underworld", title: "法乌克斯要塞", value: 15, isChecked: false},
        {id: "Mp_Verdun", title: "凡尔登高地", value: 13, isChecked: false},
        {id: "Mp_Trench", title: "尼维尔之夜", value: 14, isChecked: false},
        {id: "Mp_Shoveltown", title: "攻占托尔", value: 3, isChecked: false},
        {id: "Mp_Bridge", title: "勃鲁希洛夫关口", value: 18, isChecked: false},
        {id: "Mp_Islands", title: "阿尔比恩", value: 22, isChecked: false},
        {id: "Mp_Ravines", title: "武普库夫山口", value: 20, isChecked: false},
        {id: "Mp_Valley", title: "加利西亚", value: 17, isChecked: false},
        {id: "Mp_Tsaritsyn", title: "察里津", value: 19, isChecked: false},
        {id: "Mp_Volga", title: "窝瓦河", value: 21, isChecked: false},
        {id: "Mp_Beachhead", title: "海丽丝岬", value: 23, isChecked: false},
        {id: "Mp_Harbor", title: "泽布吕赫", value: 24, isChecked: false},
        {id: "Mp_Naval", title: "黑尔戈兰湾", value: 26, isChecked: false},
        {id: "Mp_Ridge", title: "阿奇巴巴", value: 25, isChecked: false},
        {id: "Mp_Offensive", title: "索姆河", value: 32, isChecked: false},
        {id: "Mp_Hell", title: "帕斯尚尔", value: 31, isChecked: false},
        {id: "Mp_River", title: "卡波雷托", value: 30, isChecked: false},
        {id: "Mp_Alps", title: "剃刀边缘", value: 29, isChecked: false},
        {id: "Mp_Blitz", title: "伦敦的呼唤：夜袭", value: 27, isChecked: false},
        {id: "Mp_London", title: "伦敦的呼唤：灾祸", value: 28, isChecked: false}
    ];
}

function getServerSlot() {
    return [
        {id: "Slot_None", title: "无", value: 1, isChecked: true},
        {id: "Slot_OneToFive", title: "1 - 5", value: 2, isChecked: true},
        {id: "Slot_SixToTen", title: "6 - 10", value: 3, isChecked: true},
        {id: "Slot_TenPlus", title: "10 +", value: 4, isChecked: false},
        {id: "Slot_All", title: "全部", value: 5, isChecked: false},
        {id: "Slot_Spectator", title: "观众", value: 6, isChecked: false}
    ];
}

function getServerRegion() {
    return [
        {id: "Region_NorthAmerica", title: "北美洲", value: 7, isChecked: false},
        {id: "Region_SouthAmerica", title: "南美洲", value: 6, isChecked: false},
        {id: "Region_Antarctica", title: "南极洲", value: 5, isChecked: false},
        {id: "Region_Africa", title: "非洲", value: 4, isChecked: false},
        {id: "Region_Europe", title: "欧洲", value: 3, isChecked: true},
        {id: "Region_Asia", title: "亚洲", value: 1, isChecked: true},
        {id: "Region_Oceania", title: "大洋洲", value: 2, isChecked: false}
    ];
}

function getServerType() {
    return [
        {id: "Type_Official", title: "DICE 官方", value: 1, isChecked: false},
        {id: "Type_Private", title: "私人服务器", value: 2, isChecked: false},
        {id: "Type_PrivateSpecial", title: "私人服务器（特殊）", value: 3, isChecked: false},
        {id: "Type_PrivatePassword", title: "私人服务器（密码）", value: 4, isChecked: false}
    ];
}

export {
    getServerMode,
    getServerMap,
    getServerSlot,
    getServerRegion,
    getServerType
};