import { projects } from "../../../__mocks__/projects";

export default function handler(req, res) {
    res.status(200).json(projects)
};

export default (req, res) => {
    const { method } = req
    switch (method) {
      case 'GET': {
           return res.status(200).json(projects)
        }
        
      case 'POST': {
        const { body } = request;
        projects.push({ ...body, id: projects.length + 1 });
        return response.status(200).json(projects);
      }

      case 'PATCH': {

      }

      case 'DELETE': {
          
      }
    }
  }