using Microsoft.EntityFrameworkCore;
using Api_CrudApp.Models;

namespace Api_CrudApp.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options) {}

        public DbSet<User> Users { get; set; }
    }
}
