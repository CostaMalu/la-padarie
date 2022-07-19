import { pool } from '../../connection';

export class ComboRepository {

    public async findAll() {

        const queryString = 'SELECT id, name, price FROM combo';

        const result = await pool.promise().query(queryString);
        return result[0];
    }



    public async findOne(id: number) {

        const queryString = 'SELECT id, name, price FROM combo WHERE id = ?';

        const result = await pool.promise().query(queryString, id);
        return result[0];

    }



    public async create(name: string) {

        const queryString = 'INSERT INTO combo (name, price) VALUES (?, 0)';

        const result = await pool.promise().query(queryString, name);
        return result[0];

    }



    public async update(id: number, name: string) {
        const queryString = 'UPDATE combo SET name = IFNULL(?, name)  WHERE id = ?';

        const result = await pool.promise().query(queryString, [name, id]);
        return result[0];
    }



    public async delete(id: number) {
        const queryString = 'DELETE FROM combo WHERE id = ?';

        const result = await pool.promise().query(queryString, id);
        return result[0];
    }

}