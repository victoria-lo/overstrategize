import {hero_counter, hero_images, hero_synergy, hero_tier, hero_map_role, map_data} from '../api/overstrategize';
let URL = `https://overstrategize.herokuapp.com/`;

export const getMap = async (map) => {
    
    try {
        //hero_map/map
        let result = map_data.filter(obj => {
            return obj.name === map;
        })
        return result;

    } catch (error) {
        console.error(error);
    }
}

export const getHeroImage = async (hero)=>{
    try {
        //hero_images/hero
        let result = hero_images[hero];
        return result;

    } catch (error) {
        console.error(error);
    }
  }


export const getHeroTier = async (hero, tier)=>{
    try {
        //hero_tier
        let result = hero_tier.filter(obj => {
            return obj.name === tier;
        })
        console.log(result[0]["hero-tiers"][hero])
        return result[0]["hero-tiers"][hero];

    } catch (error) {
        console.error(error);
    }
  }


export const getHeroMapRole = async (hero, mapRole, mapType, point)=>{
    try {
        //hero_map_role
        let result = hero_map_role[hero];
        if(mapRole === "Control")  return result[mapRole];
        else return result[mapRole][mapType][point];
    } catch (error) {
        console.error(error);
    }
  }

  //fetch hero synergy
export const getHeroSynergy = async (hero, team, myTeam, enemyTeam)=>{
    try {
        //hero_synergy
        let result = hero_synergy[hero];
        let t = team==="ally"? myTeam : enemyTeam
        let add = await t.reduce((acc, heroSyn)=>{
            return acc += result[heroSyn]
        }, 0)
        return add;
    } catch (error) {
        console.error(error);
    }
  }

  //fetch hero counter
export const getHeroCounter = async (hero, team, myTeam, enemyTeam)=>{
    try {
        //hero_counter
        let result = hero_counter[hero];
        let t = team==="ally"? enemyTeam : myTeam;
            let add = await t.reduce((acc, heroSyn)=>{
            return acc += result[heroSyn]
            }, 0)
        return add;

    } catch (error) {
        console.error(error);
    }
  }

  //fetch all hero images
export const getAllImages = async ()=>{
    try {
        //hero_images
        let result = hero_images;
        return result;

    } catch (error) {
        console.error(error);
    }
}