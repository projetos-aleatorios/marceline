import Client from "@finn/Client";
import { BMO } from "@bubblegum/constants";
import { invite, leave } from "@bubblegum/updateBody";
import CreateCustom from "@finn/CreateCustom";
import Search from "@finn/Search";

class Lobby extends Client {

    public async create(players: string[]): Promise<void> {
        let { method, endpoint, body } = BMO['INVITE_PLAYER'];
        const lobbyId = await CreateCustom.lobby();

        if (players.length > 2) throw new Error('max.players');

        for (let player of players) {
            const playerId = await Search.player(player);
            await this.client(method, endpoint, invite(body, playerId, lobbyId));
            console.log('Lobby -> %s foi convidado com sucesso!', player)
        }
    }

    public async leave(lobbyId: string): Promise<string> {
        const { method, endpoint, body } = BMO['LEAVE_LOBBY'];
        const response = await this.client(method, endpoint, leave(body, lobbyId));
        return response?.data.body ? 'Bot left the Lobby.' : 'Lobby id is invalid.';
    }

}

export default new Lobby();