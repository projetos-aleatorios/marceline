import { BMO } from '@bubblegum/constants';
import Client from "@finn/Client";
import concat from '@bubblegum/concat';

class Search extends Client {

    private getPlayerByStatus(username: string, data: any, status: boolean): (string | null) {
        return data
            .filter((i: any) => status ? i.result.account.presence === 'online' : true)
            .find((i: any) => i.result?.account['identity.username'].toLowerCase() === username || i.result.account['identity.alternate.wb_network'][0])
            ?.result.account_id ?? null
    }

    public async player(username: string, status: boolean = true): Promise<string> {
        const { method, endpoint, query, body } = BMO['PROFILE'];

        const response = await this.client(method, concat(endpoint, username, query), body);
        const { total, results } = response.data

        if (total < 1) {
            throw new Error('player.not.found'); //Adicionar error custom
        }

        const playerId = this.getPlayerByStatus(username, results, status);

        if (!playerId) {
            throw new Error('player.not.found');  //Adicionar error custom
        }

        return playerId;

    }

}

export default new Search();