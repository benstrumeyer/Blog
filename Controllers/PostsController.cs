using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Blog.Models;
using Blog.IoC;
using System.Web;

namespace Blog.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        protected BlogContext context;

        public PostsController(BlogContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public ActionResult Test()
        {
                context.Database.EnsureCreated();
                if (!context.Posts.Any())
                {
                    context.Posts.Add(new Post
                    {
                        Title = "Second post using DI!",
                        Content = "Second!!",
                        Likes = 1
                    });

                    context.SaveChanges();

                }

            return Ok("Yay");
        }

        // GET: api/Posts
        [HttpGet]
        public IEnumerable<Post> GetPosts()
        {
            return context.Posts;
        }

        // GET: api/Posts/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPost([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var post = await context.Posts.FindAsync(id);

            if (post == null)
            {
                return NotFound();
            }

            return Ok(post);
        }

        // PUT: api/Posts/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPost([FromRoute] int id, [FromBody] Post post)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != post.PostId)
            {
                return BadRequest();
            }

            context.Entry(post).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PostExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Posts
        [HttpPost]
        public async Task<IActionResult> PostPost([FromBody] Post post)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            context.Posts.Add(post);
            await context.SaveChangesAsync();

            return CreatedAtAction("GetPost", new { id = post.PostId }, post);
        }

        // DELETE: api/Posts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePost([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var post = await context.Posts.FindAsync(id);
            if (post == null)
            {
                return NotFound();
            }

            context.Posts.Remove(post);
            await context.SaveChangesAsync();

            return Ok(post);
        }

        private bool PostExists(int id)
        {
            return context.Posts.Any(e => e.PostId == id);
        }
    }
}