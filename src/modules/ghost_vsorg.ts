import { Application } from "express";
import { Module } from "module";
import { prisma } from "..";

// Import Proto
import * as wm from "../wmmt/wm.proto";

// Import Util
import * as common from "../util/common";


export default class GhostModule extends Module {
    register(app: Application): void {

        app.post('/method/load_ghost_expedition_info', async (req, res) => {

            // Get the request body for the load stamp target request
            let body = wm.wm.protobuf.LoadGhostExpeditionInfoRequest.decode(req.body);

            let userScores = await prisma.ghostExpedition.findFirst({
                where:{
                    carId: body.carId,
                    ghostExpeditionId: 1
                }
            })

            let localScores = await prisma.ghostExpedition.findMany({
                where:{
                    ghostExpeditionId: 1
                }
            })

            let sum = 0;
            for(let i=0; i<localScores.length; i++)
            {
                sum += localScores[i].score;
            }

            // Response data
            let msg = {
                error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
                sugorokuPoint: userScores?.sugorokuPoint || 0,
                score: userScores?.score || 0,
                localScore: sum,
            };

            // Encode the response
			let message = wm.wm.protobuf.LoadGhostExpeditionInfoResponse.encode(msg);

            // Send the response to the client
            common.sendResponse(message, res);
		})

        app.get('/resource/ghost_expedition_ranking', async (req, res) => {	

            let ghostExpeditionRankings: wm.wm.protobuf.GhostExpeditionRankingEntry[] = []

            // Get VSORG / Expedition Participant
            let localScores = await prisma.ghostExpedition.findMany({
                where:{
                    ghostExpeditionId: 1
                },
                orderBy:{
                    score: 'desc'
                }
            })

            // Get car score
            let car;
            let todaysMvps;
            for(let i=0; i<localScores.length; i++)
            {
                car = await prisma.car.findFirst({
                    where:{
                        carId: localScores[i].carId
                    },
                    orderBy:{
                        carId: 'asc'
                    },
                    include:{
                        gtWing: true,
                        lastPlayedPlace: true
                    }
                });

                
                if(car)
                {    
                    ghostExpeditionRankings.push(wm.wm.protobuf.GhostExpeditionRankingEntry.create({
                        rank: i+1,
                        score: localScores[i].score,
                        car: car!
                    }));

                    if(i === 0)
                    {
                        todaysMvps = wm.wm.protobuf.GhostExpeditionRankingEntry.create({
                            rank: i+1,
                            score: localScores[i].score,
                            car: car!
                        });
                    }
                }
            }   

            // Totaling score for store score
            let sum = 0;
            for(let i=0; i<localScores.length; i++)
            {
                sum += localScores[i].score;
            }

            // Response data
            let msg = {
                error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
                localScore: sum,
                todaysMvp: todaysMvps || null,
                localRanking: ghostExpeditionRankings || null
            };

            // Encode the response
			let message = wm.wm.protobuf.GhostExpeditionRanking.encode(msg);

            // Send the response to the client
            common.sendResponse(message, res);
        })

        
        app.post('/method/load_ghost_expedition_target_by_path', async (req, res) => {

            // Get the request body for the load stamp target request
            //let body = wm.wm.protobuf.LoadGhostExpeditionTargetByPathRequest.decode(req.body);

            let areaExpedition: wm.wm.protobuf.LoadGhostExpeditionTargetByPathResponse.AreaStats[] = [];

            for(let j=0; j<19; j++)
			{
                // 14 - 16 are dummy area, 17 is C1 Closed
				if(j >= 14){
					j = 18; // GID_RUNAREA_HIROSHIMA
				}
				let areaVal = 0;
				let pathVal = 0;
				if(j === 0){ // GID_RUNAREA_C1
					areaVal = 0;
					pathVal = Math.floor(Math.random() * 10);
				}
				else if(j === 1){ // GID_RUNAREA_RING
					areaVal = 1;
					pathVal = Math.floor(Math.random() * 6) + 10;
				}
				else if(j === 2){ // GID_RUNAREA_SUBTOKYO_3_4
					areaVal = 2;
					pathVal = Math.floor(Math.random() * 2) + 16;
				}
				else if(j === 3){ // GID_RUNAREA_SUBTOKYO_5
					areaVal = 3;
					pathVal = Math.floor(Math.random() * 2) + 18;
				}
				else if(j === 4){ // GID_RUNAREA_WANGAN
					areaVal = 4;
					pathVal = Math.floor(Math.random() * 7) + 20;
				}
				else if(j === 5){ // GID_RUNAREA_K1
					areaVal = 5;
					pathVal = Math.floor(Math.random() * 7) + 27;
				}
				else if(j === 6){ // GID_RUNAREA_YAESU
					areaVal = 6;
					pathVal = Math.floor(Math.random() * 4) + 34;
				}
				else if(j === 7){ // GID_RUNAREA_YOKOHAMA
					areaVal = 7;
					pathVal = Math.floor(Math.random() * 11) + 38;
				}
				else if(j === 8){ // GID_RUNAREA_NAGOYA
					areaVal = 8;
					pathVal = 49;
				}
				else if(j === 9){ // GID_RUNAREA_OSAKA
					areaVal = 9;
					pathVal = Math.floor(Math.random() * 4) + 50;
				}
				else if(j === 10){ // GID_RUNAREA_KOBE
					areaVal = 10;
					pathVal = Math.floor(Math.random() * 2) + 54;
				}
				else if(j === 11){ // GID_RUNAREA_FUKUOKA
					areaVal = 11;
					pathVal = Math.floor(Math.random() * 4) + 58;
				}
				else if(j === 12){ // GID_RUNAREA_HAKONE
					areaVal = 12;
					pathVal = Math.floor(Math.random() * 2) + 62;
				}
				else if(j === 13){ // GID_RUNAREA_TURNPIKE
					areaVal = 13;
					pathVal = Math.floor(Math.random() * 2) + 64;
				}
				//14 - 16 are dummy area, 17 is GID_RUNAREA_C1_CLOSED
				else if(j === 18){ // GID_RUNAREA_HIROSHIMA
					areaVal = 18;
					pathVal = Math.floor(Math.random() * 2) + 56;
				}

                areaExpedition.push(wm.wm.protobuf.LoadGhostExpeditionTargetByPathResponse.AreaStats.create({
                    area: areaVal,
                    path: pathVal,
                    wantedInfo: null
                }));
            }

            let msg = {
                error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
                areas: areaExpedition,
                selectionMethod: wm.wm.protobuf.PathSelectionMethod.PATH_NORMAL // idk what this is
            };

            // Encode the response
			let message = wm.wm.protobuf.LoadGhostExpeditionTargetByPathResponse.encode(msg);

            // Send the response to the client
            common.sendResponse(message, res);
		})

        app.post('/method/load_ghost_expedition_targets', async (req, res) => {

            // Get the request body for the load stamp target request
            let body = wm.wm.protobuf.LoadGhostExpeditionTargetsRequest.decode(req.body);

            let lists_candidates: wm.wm.protobuf.GhostCar[] = [];

            let car = await prisma.car.findMany({
                include:{
                    gtWing: true,
                    lastPlayedPlace: true
                }
            });

            let localScores = await prisma.ghostExpedition.findMany({
                where:{
                    ghostExpeditionId: 1
                }
            })

            let sum = 0;
            for(let i=0; i<localScores.length; i++)
            {
                sum += localScores[i].score;
            }

            if(car)
            {
                // Get the area id and ramp id
                let area = 0;
                let ramp = 0;
                let path = 0;
                if(body.path)
                {
                    if(body.path >= 0 && body.path <= 9){ // GID_PATH_C1
                        area = Number(0);
                        ramp = Number(Math.floor(Math.random() * 4));
                    }
                    else if(body.path >= 10 && body.path <= 15){ // GID_PATH_N9
                        area = Number(1);
                        ramp = Number(Math.floor(Math.random() * 2) + 4);
                    }
                    else if(body.path >= 16 && body.path <= 17){ // GID_PATH_WTEAST
                        area = Number(2);
                        ramp = Number(Math.floor(Math.random() * 2) + 6);
                    }
                    else if(body.path >= 18 && body.path <= 19){ // GID_PATH_WT_UP_DOWN
                        area = Number(3);
                        ramp = Number(Math.floor(Math.random() * 2) + 8);
                    }
                    else if(body.path >= 20 && body.path <= 26){ // GID_PATH_WG
                        area = Number(4);
                        ramp = Number(Math.floor(Math.random() * 4) + 10);
                    }
                    else if(body.path >= 27 && body.path <= 33){ // GID_PATH_KG
                        area = Number(5);
                        ramp = Number(Math.floor(Math.random() * 4) + 14);
                    }
                    else if(body.path >= 34 && body.path <= 37){ // GID_PATH_YS
                        area = Number(6);
                        ramp = Number(Math.floor(Math.random() * 3) + 18);
                    }
                    else if(body.path >= 38 && body.path <= 48){ // GID_PATH_KG_SHINYAMASHITA_MINATOMIRAI
                        area = Number(7);
                        ramp = Number(Math.floor(Math.random() * 4) + 21);
                    }
                    else if(body.path === 49){ // GID_PATH_NGR
                        area = Number(8);
                        ramp = Number(25);
                    }
                    else if(body.path >= 50 && body.path <= 53){ // GID_PATH_OS
                        area = Number(9);
                        ramp = Number(26);
                    }
                    else if(body.path >= 54 && body.path <= 55){ // GID_PATH_KB
                        area = Number(10);
                        ramp = Number(Math.floor(Math.random() * 2) + 27);
                    }
                    else if(body.path >= 58 && body.path <= 61){ // GID_PATH_FK
                        area = Number(11);
                        ramp = Number(Math.floor(Math.random() * 4) + 29);
                    }
                    else if(body.path >= 62 && body.path <= 63){ // GID_PATH_HK
                        area = Number(12);
                        ramp = Number(Math.floor(Math.random() * 2) + 33);
                    }
                    else if(body.path >= 64 && body.path <= 65){ // GID_PATH_TP
                        area = Number(13);
                        ramp = Number(Math.floor(Math.random() * 2) + 35);
                    }
                    else if(body.path >= 56 && body.path <= 57){ // GID_PATH_HS
                        area = Number(18);
                        ramp = Number(Math.floor(Math.random() * 2) + 27);
                    }

                    path = Number(body.path);
                }


                for(let i=0; i<car.length; i++)
                {
                    // Push data to Ghost car proto
                    lists_candidates.push(wm.wm.protobuf.GhostCar.create({
                        car: car[i],
                        area: area,
                        ramp: ramp,
                        path: path,
                        nonhuman: false,
                        type: wm.wm.protobuf.GhostType.GHOST_REGION,
                    }));
                }
                
            }

            // Response data
            let msg = {
                error: wm.wm.protobuf.ErrorCode.ERR_SUCCESS,
                candidates: lists_candidates,
                localScore: sum
            };

            // Encode the response
			let message = wm.wm.protobuf.LoadGhostExpeditionTargetsResponse.encode(msg);

            // Send the response to the client
            common.sendResponse(message, res);
        })
    }
}