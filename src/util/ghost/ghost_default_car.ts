import { Config } from "../../config";

// Import Proto
import * as wm from "../../wmmt/wm.proto";

// Global Variable
let date = Math.floor(new Date().getTime() / 1000);
let playedPlace = wm.wm.protobuf.Place.create({ 
    placeId: Config.getConfig().placeId,
    regionId: Config.getConfig().regionId,
    shopName: Config.getConfig().shopName,
    country: Config.getConfig().country
});


export async function DefaultGhostCarBMW()
{
    let cars = wm.wm.protobuf.Car.create({ 
        carId: 999999999, // Don't change this
        name: 'ＳＡＦＴＹ',
        regionId: 18, // IDN (福井)
        manufacturer: 0,
        model: 71, // Z4 Safty (yes.. safty)
        visualModel: 100, // Z4 Safty (yes.. safty)
        defaultColor: 0,
        customColor: 0,
        wheel: 20,
        wheelColor: 0,
        aero: 0,
        bonnet: 0,
        wing: 0,
        mirror: 0,
        neon: 0,
        trunk: 0,
        plate: 0,
        plateColor: 0,
        plateNumber: 0,
        tunePower: 18,
        tuneHandling: 16,
        rivalMarker: 32,
        aura: 551,
        windowSticker: true,
        windowStickerString: 'ＢＡＹＳＨＯＲＥ',
        windowStickerFont: 0,
        title: 'No Ghost for this Manufacturer',
        level: 65, // SSSSS
        lastPlayedAt: date,
        country: 'JPN',
        lastPlayedPlace: playedPlace
    });

    return { cars };
}


export async function DefaultGhostCarChevrolet()
{
    let cars = wm.wm.protobuf.Car.create({ 
        carId: 999999999, // Don't change this
        name: 'ＴＡＸＩ',
        regionId: 18, // IDN (福井)
        manufacturer: 1,
        model: 66, // Corvette C6 Taxi
        visualModel: 1, // Corvette C6 Taxi
        defaultColor: 0,
        customColor: 0,
        wheel: 20,
        wheelColor: 0,
        aero: 0,
        bonnet: 0,
        wing: 0,
        mirror: 0,
        neon: 0,
        trunk: 0,
        plate: 0,
        plateColor: 0,
        plateNumber: 0,
        tunePower: 18,
        tuneHandling: 16,
        rivalMarker: 32,
        aura: 551,
        windowSticker: true,
        windowStickerString: 'ＢＡＹＳＨＯＲＥ',
        windowStickerFont: 0,
        title: 'No Ghost for this Manufacturer',
        level: 65, // SSSSS
        lastPlayedAt: date,
        country: 'JPN',
        lastPlayedPlace: playedPlace
    });

    return { cars };
}


export async function DefaultGhostCarMazda()
{
    let cars = wm.wm.protobuf.Car.create({ 
        carId: 999999999, // Don't change this
        name: 'ＥＲＥＫ７',
        regionId: 18, // IDN (福井)
        manufacturer: 2,
        model: 9, // RX-7
        visualModel: 6, // RX-7
        defaultColor: 0,
        customColor: 0,
        wheel: 20,
        wheelColor: 0,
        aero: 0,
        bonnet: 0,
        wing: 0,
        mirror: 0,
        neon: 0,
        trunk: 0,
        plate: 0,
        plateColor: 0,
        plateNumber: 0,
        tunePower: 18,
        tuneHandling: 16,
        rivalMarker: 32,
        aura: 551,
        windowSticker: true,
        windowStickerString: 'ＢＡＹＳＨＯＲＥ',
        windowStickerFont: 0,
        title: 'No Ghost for this Manufacturer',
        level: 65, // SSSSS
        lastPlayedAt: date,
        country: 'JPN',
        lastPlayedPlace: playedPlace
    });

    return { cars };
}


export async function DefaultGhostCarToyota()
{
    let cars = wm.wm.protobuf.Car.create({ 
        carId: 999999999, // Don't change this
        name: 'Ａ９０',
        regionId: 18, // IDN (福井)
        manufacturer: 8,
        model: 122, // GR Supra (not honda supra motorbike)
        visualModel: 145, // GR Supra (not honda supra motorbike)
        defaultColor: 0,
        customColor: 0,
        wheel: 20,
        wheelColor: 0,
        aero: 0,
        bonnet: 0,
        wing: 0,
        mirror: 0,
        neon: 0,
        trunk: 0,
        plate: 0,
        plateColor: 0,
        plateNumber: 0,
        tunePower: 18,
        tuneHandling: 16,
        rivalMarker: 32,
        aura: 551,
        windowSticker: true,
        windowStickerString: 'ＢＡＹＳＨＯＲＥ',
        windowStickerFont: 0,
        title: 'No Ghost for this Manufacturer',
        level: 65, // SSSSS
        lastPlayedAt: date,
        country: 'JPN',
        lastPlayedPlace: playedPlace
    });

    return { cars };
}


export async function DefaultGhostCarLamborghini()
{
    let cars = wm.wm.protobuf.Car.create({ 
        carId: 999999999, // Don't change this
        name: 'ＭＩＵＲＡ',
        regionId: 18, // IDN (福井)
        manufacturer: 11,
        model: 103, // MIURA
        visualModel: 125, // MIURA
        defaultColor: 0,
        customColor: 0,
        wheel: 20,
        wheelColor: 0,
        aero: 0,
        bonnet: 0,
        wing: 0,
        mirror: 0,
        neon: 0,
        trunk: 0,
        plate: 0,
        plateColor: 0,
        plateNumber: 0,
        tunePower: 18,
        tuneHandling: 16,
        rivalMarker: 32,
        aura: 551,
        windowSticker: true,
        windowStickerString: 'ＢＡＹＳＨＯＲＥ',
        windowStickerFont: 0,
        title: 'No Ghost for this Manufacturer',
        level: 65, // SSSSS
        lastPlayedAt: date,
        country: 'JPN',
        lastPlayedPlace: playedPlace
    });

    return { cars };
}

export async function DefaultGhostCarHonda()
{
    let cars = wm.wm.protobuf.Car.create({ 
        carId: 999999999, // Don't change this
        name: 'Ｓ６６０',
        regionId: 18, // IDN (福井)
        manufacturer: 12,
        model: 105, // S660
        visualModel: 130, // S660
        defaultColor: 0,
        customColor: 0,
        wheel: 20,
        wheelColor: 0,
        aero: 0,
        bonnet: 0,
        wing: 0,
        mirror: 0,
        neon: 0,
        trunk: 0,
        plate: 0,
        plateColor: 0,
        plateNumber: 0,
        tunePower: 18,
        tuneHandling: 16,
        rivalMarker: 32,
        aura: 551,
        windowSticker: true,
        windowStickerString: 'ＢＡＹＳＨＯＲＥ',
        windowStickerFont: 0,
        title: 'No Ghost for this Manufacturer',
        level: 65, // SSSSS
        lastPlayedAt: date,
        country: 'JPN',
        lastPlayedPlace: playedPlace
    });

    return { cars };
}

export async function DefaultGhostCarPorsche()
{
    let cars = wm.wm.protobuf.Car.create({ 
        carId: 999999999, // Don't change this
        name: 'Ｓ６６０',
        regionId: 18, // IDN (福井)
        manufacturer: 14,
        model: 121, // 718 CAYMAN S
        visualModel: 144, // 718 CAYMAN S
        defaultColor: 0,
        customColor: 0,
        wheel: 20,
        wheelColor: 0,
        aero: 0,
        bonnet: 0,
        wing: 0,
        mirror: 0,
        neon: 0,
        trunk: 0,
        plate: 0,
        plateColor: 0,
        plateNumber: 0,
        tunePower: 18,
        tuneHandling: 16,
        rivalMarker: 32,
        aura: 551,
        windowSticker: true,
        windowStickerString: 'ＢＡＹＳＨＯＲＥ',
        windowStickerFont: 0,
        title: 'No Ghost for this Manufacturer',
        level: 65, // SSSSS
        lastPlayedAt: date,
        country: 'JPN',
        lastPlayedPlace: playedPlace
    });

    return { cars };
}