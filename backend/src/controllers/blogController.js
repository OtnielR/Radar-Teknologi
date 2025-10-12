import Blog from "../models/blog.js";

export const blogController = (db) => {
    const blogModel = new Blog(db);

    return {
        getAll: async (req, res, next) => {
            try {
                const blogs = await blogModel.getAll();
                res.json(blogs);
            } catch (err) {
                next(err);
            }
        },

        getById: async (req, res, next) => {
            try {
                const blog = await blogModel.getById(req.params.id);
                if (!blog) return res.status(404).json({ message: "Not found" });
                res.json(blog);
            } catch (err) {
                next(err);
            }
        },

        create: async (req, res, next) => {
            try {
                const newBlog = await blogModel.create(req.body);
                res.status(201).json(newBlog);
            } catch (err) {
                next(err);
            }
        },

        update: async (req, res, next) => {
            try {
                const updated = await blogModel.update(req.params.id, req.body);
                res.json(updated);
            } catch (err) {
                next(err);
            }
        },

        delete: async (req, res, next) => {
            try {
                await blogModel.delete(req.params.id);
                res.json({ message: "Deleted successfully" });
            } catch (err) {
                next(err);
            }
        },
    };
};
