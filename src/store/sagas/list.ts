import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from "axios";
import { FETCH_TODOS_REQUESTED, FETCH_TODOS_SUCCEEDED, FETCH_TODOS_FAILED } from '../actionTypes/list';
import { API_TODOS_URL } from "../../utils/config";
import { ITodo } from '../../components/list/types';

const getTodos = () => axios.get<ITodo[]>(`${API_TODOS_URL}/todos`);

function* fetchAllTodos() {
    try {
        const todos: ITodo[] = yield call(getTodos);
        console.log(todos);
        yield put({ type: FETCH_TODOS_SUCCEEDED, todos })
    } catch ({ message }) {
        yield put({ type: FETCH_TODOS_FAILED, message: message })
    }
}
export default function* watchTodos() {
    yield all([takeLatest(FETCH_TODOS_REQUESTED, fetchAllTodos)]);
}