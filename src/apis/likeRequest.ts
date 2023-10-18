import getErrorMessage from '@/utils/getErrorMessage';
import { tokenInstance } from './client';

export class LikeRequest {
    routineId: number | undefined;

    constructor(routineId: number | undefined) {
        this.routineId = routineId;
    }

    async LikePost() {
        try {
            const response = await tokenInstance.post(`/exercise/${this.routineId}/likes`);
            return response;
        } catch (e) {
            throw new Error(getErrorMessage(e));
        }
    }

    async LikeDelete() {
        try {
            const response = await tokenInstance.delete(`/exercise/${this.routineId}/likes`);
            return response;
        } catch (e) {
            throw new Error(getErrorMessage(e));
        }
    }
}
