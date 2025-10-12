export default class Blog {
    constructor(db) {
        this.db = db;
    }

    async getAll() {
        return this.db.all("SELECT * FROM blogs ORDER BY created_at DESC");
    }

    async getById(id) {
        return this.db.get("SELECT * FROM blogs WHERE id = ?", [id]);
    }

    async create({ title, content, image }) {
        const result = await this.db.run(
            "INSERT INTO blogs (title, content, image) VALUES (?, ?, ?)",
            [title, content, image]
        );
        return { id: result.lastID };
    }

    async update(id, { title, content, image }) {
        await this.db.run(
            "UPDATE blogs SET title = ?, content = ?, image = ? WHERE id = ?",
            [title, content, image, id]
        );
        return this.getById(id);
    }

    async delete(id) {
        return this.db.run("DELETE FROM blogs WHERE id = ?", [id]);
    }
}
