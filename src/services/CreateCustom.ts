import Client from "@finn/Client";
import concat from '@bubblegum/concat';
import { BMO, CUSTOM_SETTINGS } from "@bubblegum/constants";
import type { ENDPOINT } from "@bubblegum/types/constants";
import { sleep } from "bun";
import Lobby from "./Lobby";

class CreateCustom extends Client {

    public async lobby(): Promise<string> {
        const { method, endpoint, body } = BMO['CUSTOM_GAME'];

        const response = await this.client(method, endpoint, body);
        const lobbyId: string = response.data.body.lobby.MatchID;

        await this.settings(lobbyId, 'UPDATE_GAME_MODE');
        await this.settings(lobbyId, 'UPDATE_TEAM_SETTING', 1);
        //await this.settings(lobbyId, 'UPDATE_TEAM_SETTING', 2); //

        this.matches(lobbyId);

        return lobbyId;
    }

    private async matches(lobbyId: string): Promise<void> {
        const { method, endpoint, query, body } = BMO['MATCHES'];
        while(true) {
            const response = await this.client(method, concat(endpoint, lobbyId, query), body);
            const playersInLobby = response.data.players.all.length;
            if(playersInLobby > 1) {
                Lobby.leave(lobbyId)
                console.log('Lobby -> Bot saiu da sala.')
                break 
            }
            sleep(1000)
        }

    }

    public async settings(lobbyId: string, path: ENDPOINT, x: number = 1): Promise<void> {
        
        let { method, endpoint, body } = BMO[path];

        if (path === 'UPDATE_TEAM_SETTING') {
            body = CUSTOM_SETTINGS[x]
        }

        body.MatchID = lobbyId

        await this.client(method, endpoint, body);
        console.log('Config -> %s setado', path)
    }
}

export default new CreateCustom();