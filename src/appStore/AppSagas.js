
import authSagas from '../components/Auth/AuthSagas';
import articleSagas from '../components/Articles/ArticleSagas';

export default function* indexSagas () {
    yield [
        authSagas(),
        articleSagas()
    ]
}